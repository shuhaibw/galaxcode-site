import Link from 'next/link'

export default function Begin({href}) {
   return(
   <div className="flex justify-between items-center  p-4">
       <Link
            href={href}
            className=" text-gray-100  inline-flex h-10 items-center rounded-md border border-[#666] bg-[#1a1a1a] px-4 text-sm font-medium shadow-sm transition-colors hover:bg-[#333] hover:text-purple-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-purple-400/50"
            prefetch={false}
         >
            Begin
         </Link>
   </div>
   );
}