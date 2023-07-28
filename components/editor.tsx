"use client"
import { useState, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

export default function Editor() {
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<EditorJS>();

    const initializeEditor = async () => {
        const EditorJS = (await import("@editorjs/editorjs")).default;
        const Header = (await import("@editorjs/header")).default;
        const Paragraph = (await import("@editorjs/paragraph")).default;
        const Quote = (await import("@editorjs/quote")).default;
        const Table = (await import("@editorjs/table")).default;
        const Image = (await import("@editorjs/image")).default;
        const List = (await import("@editorjs/list")).default;
        const Embed = (await import("@editorjs/embed")).default;
        const Code = (await import("@editorjs/code")).default;
        const SimpleImage = (await import("@editorjs/simple-image")).default;
        const NestedList = (await import("@editorjs/nested-list")).default;
        const Checklist = (await import("@editorjs/checklist")).default;
        // const Warning = (await import("@editorjs/warning")).default;
        const Delimiter = (await import("@editorjs/delimiter")).default;
        const InlineCode = (await import("@editorjs/inline-code")).default;
        const Marker = (await import("@editorjs/marker")).default;
        const Underline = (await import("@editorjs/underline")).default;
        // const InlineImage = (await import("@editorjs/inline-image")).default;

        if(!ref.current) {
            const editor = new EditorJS({
                holder: "editorjs",
                tools: {
                    header: Header,
                    paragraph: Paragraph,
                    table: Table,
                    quote: Quote,
                    list: List,
                    SimpleImage: SimpleImage,
                    code: Code,
                    embed: Embed,
                    nestedList: NestedList,
                    checklist: Checklist,
                    // warning: Warning,
                    delimiter: Delimiter,
                    inlineCode: InlineCode,
                    marker: Marker,
                    underline: Underline,
                    // inlineImage: InlineImage,
                },
            });
            ref.current = editor;
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMounted(true);
        }
    }, []);

    useEffect(() => {
        const init = async () => {
            await initializeEditor();
        };

        if (isMounted) {
            init();
        

        return () => {
            if (ref.current){
                ref.current.destroy();
            }
        }
    }
}, [isMounted]);

const save = () => {
    if (ref.current) {
        ref.current.save().then((outputData) => {
            console.log("Article data: ", outputData);
        });
    }
};

return (
    <>
        <div id="editorjs" className="prose max-w-full min-h-screen" />
        <button onClick={save}>Save</button>    
    </>
);
}