
import { Button } from "@fluentui/react-components";

import styles from "./ClearChatButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

 const ClearChatButton = ({ className, disabled, onClick }: Props) => {
    return (
      // remove from div ${styles.container}
        <div className={` ${className ?? ""} pt-1.5 pb-1.5 `} onClick={onClick}>
            <Button  disabled={disabled}  >
            {"Clear Chat"}
            </Button>
        </div>
    );
};
export default ClearChatButton;