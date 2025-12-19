"use client"

export function Button({content, value}){

    return (
        <div style={{padding : value }} >
            <button onClick={() => console.log("hello")}>
                {content}
            </button>
        </div>
    )
}