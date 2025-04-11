"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';

enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
}
  
interface SavedMessage {
 role: "user" | "system" | "assistant";
 content: string;
}  

const Agent = ({userName}: AgentProps) => {
  const router = useRouter();
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState<string>("");
  return (
    <>
    <div className='call-view'>
      <div className='card-interviewer'>
        <div className='avatar'>
          <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className='object-cover' /> 
          {isSpeaking && <span className='animate-speak'/>}
        </div>
        <h3>AI Interviewer</h3>
      </div>

      <div className='card-border'>
        <div className='card-content'> 
          <Image src="/user-avatar.png" alt="user avatar" width={540} height={540} className='rounded-full object-cover size-[120px]' />
          <h3>{userName}</h3>
        </div>
      </div>
    </div>

    <div className='w-full flex justify-center'>
    {callStatus !== "ACTIVE" ? (
          <button className="relative btn-call" onClick={() => {}}>
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />

            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect" onClick={() => {}}>
            End
          </button>
        )}
      
    </div>
    </>
  )
}

export default Agent
