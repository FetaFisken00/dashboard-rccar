'use client'
import useWebSocket, {ReadyState} from "react-use-websocket";
import React, {useEffect, useState} from "react";

export function UDPthing() {
    const {
        sendMessage,
        lastMessage,
        readyState,
    } = useWebSocket('ws://localhost:8080');

    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        if (lastMessage !== null) {
            // print the last received message to the console
            console.log(lastMessage.data);
            setMessages(prev => [...prev, lastMessage.data])
        }
    }, [lastMessage]);

    return (
        <div>
            <p>
                The WebSocket is currently {readyState === ReadyState.OPEN
                    ? 'open'
                    : readyState === ReadyState.CLOSED
                        ? 'closed'
                        : 'connecting'}
            </p>
            {messages.map((message, idx) => <p key={idx}>{message}</p>)}
        </div>
    );
}