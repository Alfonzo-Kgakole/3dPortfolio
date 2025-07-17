import {useState} from "react";

const CopyEmailButton = () => {
    const [copy, setCopy ] = useState(false)
    const email = "thulanikgakole@gmail.com"

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
        setCopy(true)

        setTimeout(() => {
            setCopy(false)
        }, 2000)
    }
    return (
        <button className={"relative px-1 py-4 text-sm bg-primary w-[12rem] text-center rounded-full cursor-pointer overflow-hidden"}>
            <p className={"flex items-center justify-center gap-2"}>
                <img src={"assets/copy-done.svg"} className={"w-5"} />
                Email has Copied
            </p>
            <p className={"flex items-center justify-center gap-2"}>Copy Email Address
            <img
                src={"assets/copy.svg"}
                className={"w-5"}
                alt={"copy"}
            />
            </p>
        </button>
    )
}

export default CopyEmailButton