"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// AnimatedSpan for a simple fade-in effect on a block of text
export const AnimatedSpan = ({ children, delay = 0, className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <span
      className={cn(
        "transition-opacity duration-500 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

// TypingAnimation for a full typing effect, handling HTML
export const TypingAnimation = ({ children, typingSpeed = 20, className }) => {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let timeoutId;
    let charIndex = 0;

    const type = () => {
      if (charIndex < children.length) {
        const char = children.charAt(charIndex);
        if (char === '<') {
          const closingTagIndex = children.indexOf('>', charIndex);
          if (closingTagIndex !== -1) {
            const tag = children.substring(charIndex, closingTagIndex + 1);
            setTypedText(prev => prev + tag);
            charIndex = closingTagIndex + 1;
          } else {
            setTypedText(prev => prev + char);
            charIndex++;
          }
        } else {
          setTypedText(prev => prev + char);
          charIndex++;
        }
        timeoutId = setTimeout(type, typingSpeed);
      } else {
        setIsTypingComplete(true);
      }
    };
    
    timeoutId = setTimeout(type, 500); // 500ms initial delay

    return () => clearTimeout(timeoutId);
  }, [children, typingSpeed]);

  return (
    <pre className={cn("whitespace-pre-wrap tracking-wide text-sm leading-relaxed", className)}>
        <span dangerouslySetInnerHTML={{ __html: typedText }} />
        {!isTypingComplete && (
          <span className="animate-blink w-2 h-4 inline-block bg-white ml-1"></span>
        )}
    </pre>
  );
};

export const Terminal = ({ children, className }) => {
  return (
    <div
      className={cn(
        "z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-border bg-background",
        className
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{children}</code>
      </pre>
    </div>
  );
};