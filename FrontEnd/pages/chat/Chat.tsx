import { useRef, useState, useEffect } from "react";
import { Checkbox, Panel, DefaultButton, TextField, SpinButton } from "@fluentui/react";
import { SparkleFilled } from "@fluentui/react-icons";
import readNDJSONStream from "ndjson-readablestream";

import styles from "./Chat.module.css";

import {
    RetrievalMode,
    ChatAppResponse,
    ChatAppResponseOrError,
    ChatAppRequest,
    ResponseMessage,
    VectorFieldOptions,
    GPT4VInput
} from "@/pages/api/models";
import {chatApi} from "@/pages/api/api"     // API utility to interact with the backend
import { Answer, AnswerError, AnswerLoading } from "../../components/Answer";
import { QuestionInput } from "../../components/QuestionInput";
import { ExampleList } from "../../components/Example";
import { UserChatMessage } from "../../components/UserChatMessage";
import { ClearChatButton } from "../../components/ClearChatButton";
import { VectorSettings } from "../../components/VectorSettings";

const Chat = () => {
    // Define state variables to manage UI state
    const [isConfigPanelOpen, setIsConfigPanelOpen] = useState(false);  // Controls the visibility of the config panel
    const [promptTemplate, setPromptTemplate] = useState<string>("");   // Stores the prompt template
    const [retrieveCount, setRetrieveCount] = useState<number>(3);      // Number of retrieval results
    const [retrievalMode, setRetrievalMode] = useState<RetrievalMode>(RetrievalMode.Hybrid);  // Retrieval mode (hybrid by default)
    const [useSemanticRanker, setUseSemanticRanker] = useState<boolean>(true);  // Whether to use the semantic ranker
    const [shouldStream, setShouldStream] = useState<boolean>(true);    // Whether to stream responses
    const [useSemanticCaptions, setUseSemanticCaptions] = useState<boolean>(false); // Use semantic captions instead of full documents
    const [excludeCategory, setExcludeCategory] = useState<string>(""); // Category to exclude from results
    const [useSuggestFollowupQuestions, setUseSuggestFollowupQuestions] = useState<boolean>(false); // Suggest follow-up questions
    const [vectorFieldList, setVectorFieldList] = useState<VectorFieldOptions[]>([VectorFieldOptions.Embedding]); // Vector field options
    const [useOidSecurityFilter, setUseOidSecurityFilter] = useState<boolean>(false); // OID security filter
    const [useGroupsSecurityFilter, setUseGroupsSecurityFilter] = useState<boolean>(false); // Groups security filter
    const [gpt4vInput, setGPT4VInput] = useState<GPT4VInput>(GPT4VInput.TextAndImages); // GPT-4V input type
    const [useGPT4V, setUseGPT4V] = useState<boolean>(false); // Whether to use GPT-4V

    const lastQuestionRef = useRef<string>("");  // Ref to store the last question asked
    const chatMessageStreamEnd = useRef<HTMLDivElement | null>(null);  // Ref to scroll to the latest message

    // State for managing the chat and UI behavior
    const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state when waiting for backend response
    const [isStreaming, setIsStreaming] = useState<boolean>(false); // Streaming state when receiving response chunks
    const [error, setError] = useState<unknown>(); // Error state to handle any issues

    const [activeCitation, setActiveCitation] = useState<string>(); // Active citation for displaying in the chat
    const [selectedAnswer, setSelectedAnswer] = useState<number>(0); // Track the selected answer
    const [answers, setAnswers] = useState<[user: string, response: ChatAppResponse][]>([]); // Store the chat history as pairs of questions and responses
    const [showGPT4VOptions, setShowGPT4VOptions] = useState<boolean>(false); // Control visibility of GPT-4V options

    // Function to make an API request to the backend with the user's question
    const makeApiRequest = async (question: string) => {
        lastQuestionRef.current = question; // Save the question in the ref

        // Clear previous error and loading state
        error && setError(undefined);
        setIsLoading(true);
        setActiveCitation(undefined);

        try {
            // Create the request object to be sent to the backend
            const request: ChatAppRequest = {
                prompt: question,
                session_id: "1234"  // Hardcoded session ID; should ideally be dynamic
            };

            // Await the response from the backend API
            const response = await chatApi(request); // Sends the request to the backend
            const contentType = response.headers.get("content-type");
            
            // Handle different types of responses based on the content type
            if (!response.body) {
                throw Error("No response body"); // Handle missing response body
            } else if (contentType?.indexOf('text/html') !== -1 || contentType?.indexOf('text/plain') !== -1) {
                // If the response is plain text or HTML (unexpected), handle it as an error
                const bodyText = await response.text();
                console.error(`Chat Error: ${bodyText}`);
                setError(bodyText);
            } else {
                // Parse the JSON response and update the answers array
                const parsedResponse: ChatAppResponse = await response.json();
                setAnswers([...answers, [question, parsedResponse]]); // Append the new answer to the state
            }
        } catch (e) {
            // Handle any errors that occurred during the request
            console.error(`Chat Error: ${e}`);
            setError(e);
        } finally {
            // Finally, set loading to false regardless of the outcome
            setIsLoading(false);
        }
    };

    // Function to clear the chat history and reset state
    const clearChat = () => {
        lastQuestionRef.current = "";
        error && setError(undefined);
        setActiveCitation(undefined);
        setAnswers([]);
        setIsLoading(false);
        setIsStreaming(false);
    };

    // Scroll to the end of the chat whenever the loading state changes
    useEffect(() => chatMessageStreamEnd.current?.scrollIntoView({ behavior: "smooth" }), [isLoading]);

    // Event handlers for UI components
    const onPromptTemplateChange = (_ev?: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setPromptTemplate(newValue || "");
    };

    const onRetrieveCountChange = (_ev?: React.SyntheticEvent<HTMLElement, Event>, newValue?: string) => {
        setRetrieveCount(parseInt(newValue || "3"));
    };

    const onUseSemanticRankerChange = (_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => {
        setUseSemanticRanker(!!checked);
    };

    const onUseSemanticCaptionsChange = (_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => {
        setUseSemanticCaptions(!!checked);
    };

    const onShouldStreamChange = (_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => {
        setShouldStream(!!checked);
    };

    const onExcludeCategoryChanged = (_ev?: React.FormEvent, newValue?: string) => {
        setExcludeCategory(newValue || "");
    };

    const onUseSuggestFollowupQuestionsChange = (_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => {
        setUseSuggestFollowupQuestions(!!checked);
    };

    const onUseOidSecurityFilterChange = (_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => {
        setUseOidSecurityFilter(!!checked);
    };

    const onUseGroupsSecurityFilterChange = (_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => {
        setUseGroupsSecurityFilter(!!checked);
    };

    const onExampleClicked = (example: string) => {
        makeApiRequest(example); // Trigger an API request when an example is clicked
    };

    const onShowCitation = (citation: string, index: number) => {
        setActiveCitation(citation); // Set the active citation to be displayed
        setSelectedAnswer(index);    // Mark the corresponding answer as selected
    };

    return (
      // took out the {styles.container}
       <div className="bg-[#1f1f1f] shadow1  rounded-xl overflow-hidden p-8  lg:pt-6 flex flex-col">
            {/* remove className={styles.commandsContainer} */}
            {/* remove className={styles.chatRoot} */}
             <div > 
             {/* removed {styles.chatContainer} */}
                <div className="p-90 mt-1 mb-2 flex-1 flex flex-col ">
                    {!lastQuestionRef.current ? (
                        <div className="">
                            {/* <SparkleFilled fontSize={"120px"} primaryFill={"rgba(115, 118, 225, 1)"} aria-hidden="true" aria-label="Chat logo" /> */}
                            {/* took out the {styles.chatEmptyStateTitle} */}
                            <h1 className={`text-3xl text-white font-semibold  mb-4`}>Chat with Astro</h1>
                            {/* take out header */}
                            {/* <h2 className={styles.chatEmptyStateSubtitle}>Ask anything or try an example</h2> */}
                            {/* take out examplelist */}
                            {/* <ExampleList onExampleClicked={onExampleClicked} useGPT4V={useGPT4V} /> */}
                        </div>
                    ) : (
                        <div className={styles.chatMessageStream}>
                            {/* {isStreaming &&
                                streamedAnswers.map((streamedAnswer, index) => (
                                    <div key={index}>
                                        <UserChatMessage message={streamedAnswer[0]} />
                                        <div className={styles.chatMessageGpt}>
                                            <Answer
                                                isStreaming={true}
                                                key={index}
                                                answer={streamedAnswer[1]}
                                                isSelected={false}
                                                onCitationClicked={c => onShowCitation(c, index)}
                                                onThoughtProcessClicked={() => onToggleTab(AnalysisPanelTabs.ThoughtProcessTab, index)}
                                                onSupportingContentClicked={() => onToggleTab(AnalysisPanelTabs.SupportingContentTab, index)}
                                                onFollowupQuestionClicked={q => makeApiRequest(q)}
                                                showFollowupQuestions={useSuggestFollowupQuestions && answers.length - 1 === index}
                                            />
                                        </div>
                                    </div>
                                ))} */}
                            {!isStreaming &&
                                answers.map((answer, index) => (
                                    <div key={index}>
                                        <UserChatMessage message={answer[0]} />
                                        <div className={styles.chatMessageGpt}>
                                            <Answer
                                                isStreaming={false}
                                                key={index}
                                                answer={answer[1]}
                                                isSelected={selectedAnswer === index}
                                                onCitationClicked={c => onShowCitation(c, index)}
                                                onThoughtProcessClicked={() => {}} // {() => onToggleTab(AnalysisPanelTabs.ThoughtProcessTab, index)}
                                                onSupportingContentClicked={() => {}} // {() => onToggleTab(AnalysisPanelTabs.SupportingContentTab, index)}
                                                onFollowupQuestionClicked={q => makeApiRequest(q)}
                                                showFollowupQuestions={useSuggestFollowupQuestions && answers.length - 1 === index}
                                            />
                                        </div>
                                    </div>
                                ))}
                            {isLoading && (
                                <>
                                    <UserChatMessage message={lastQuestionRef.current} />
                                    <div className={styles.chatMessageGptMinWidth}>
                                        <AnswerLoading />
                                    </div>
                                </>
                            )}
                            {error ? (
                                <>
                                    <UserChatMessage message={lastQuestionRef.current} />
                                    <div className={styles.chatMessageGptMinWidth}>
                                        <AnswerError error={error.toString()} onRetry={() => makeApiRequest(lastQuestionRef.current)} />
                                    </div>
                                </>
                            ) : null}
                            <div ref={chatMessageStreamEnd} />
                        </div>
                    )}
                  {/* remove ${styles.chatInput} */}
                    <div className={` mb-4   `}>
                        <QuestionInput
                            clearOnSend
                            placeholder="Enter your question here..."
                            disabled={isLoading}
                            onSend={question => makeApiRequest(question)}
                        />
                    </div>
               
                    <div className="cursor-pointer">
                     {/* remove {styles.commandButton} */}
                     <ClearChatButton className={` text-center bg-gray-100  hover:bg-gray-200 active:bg-gray-100 text-gray-700 font-medium rounded-lg`} onClick={clearChat} disabled={!lastQuestionRef.current || isLoading} />
               
                   </div> 

                   </div>  
        
            
   
           
                
                
                <Panel
                    headerText="Configure answer generation"
                    isOpen={isConfigPanelOpen}
                    isBlocking={false}
                    onDismiss={() => setIsConfigPanelOpen(false)}
                    closeButtonAriaLabel="Close"
                    onRenderFooterContent={() => <DefaultButton onClick={() => setIsConfigPanelOpen(false)}>Close</DefaultButton>}
                    isFooterAtBottom={true}
                >
                    <TextField
                        className={styles.chatSettingsSeparator}
                        defaultValue={promptTemplate}
                        label="Override prompt template"
                        multiline
                        autoAdjustHeight
                        onChange={onPromptTemplateChange}
                    />

                    <SpinButton
                        className={styles.chatSettingsSeparator}
                        label="Retrieve this many search results:"
                        min={1}
                        max={50}
                        defaultValue={retrieveCount.toString()}
                        onChange={onRetrieveCountChange}
                    />
                    <TextField className={styles.chatSettingsSeparator} label="Exclude category" onChange={onExcludeCategoryChanged} />
                    <Checkbox
                        className={styles.chatSettingsSeparator}
                        checked={useSemanticRanker}
                        label="Use semantic ranker for retrieval"
                        onChange={onUseSemanticRankerChange}
                    />
                    <Checkbox
                        className={styles.chatSettingsSeparator}
                        checked={useSemanticCaptions}
                        label="Use query-contextual summaries instead of whole documents"
                        onChange={onUseSemanticCaptionsChange}
                        disabled={!useSemanticRanker}
                    />
                    <Checkbox
                        className={styles.chatSettingsSeparator}
                        checked={useSuggestFollowupQuestions}
                        label="Suggest follow-up questions"
                        onChange={onUseSuggestFollowupQuestionsChange}
                    />

                    <VectorSettings
                        showImageOptions={useGPT4V && showGPT4VOptions}
                        updateVectorFields={(options: VectorFieldOptions[]) => setVectorFieldList(options)}
                        updateRetrievalMode={(retrievalMode: RetrievalMode) => setRetrievalMode(retrievalMode)}
                    />

                    <Checkbox
                        className={styles.chatSettingsSeparator}
                        checked={shouldStream}
                        label="Stream chat completion responses"
                        onChange={onShouldStreamChange}
                    />
                </Panel>
                </div>
                </div>
        
    );
};

export default Chat;
