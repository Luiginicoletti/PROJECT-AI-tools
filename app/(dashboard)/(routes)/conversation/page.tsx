"use client"

import * as z from "zod"
import { MessageSquare } from 'lucide-react';
import { Heading } from "@/components/Heading";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./constants";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""      
    }
  })

  return (
    <div className="">
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-emerald-400"
        bgColor="bg-emerald-400/10"
      />
      <div className="px-4 lg:px-8">
        
      </div>
    </div>
  );
}

export default ConversationPage;