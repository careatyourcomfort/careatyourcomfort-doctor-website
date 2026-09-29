"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-validation";
import { buildContactWhatsAppUrl } from "@/lib/contact-whatsapp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function ContactForm() {
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactInput) => {
    const url = buildContactWhatsAppUrl(data);
    window.open(url, "_blank");
    setWaUrl(url);
  };

  if (waUrl) {
    return (
      <div className="rounded-2xl border bg-secondary/40 p-6 text-center">
        <p className="font-heading text-lg font-bold">Opening WhatsApp…</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Press Send in WhatsApp to complete your message. If it
          didn&apos;t open,{" "}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline"
          >
            tap here
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="contact-name">Your name</Label>
        <Input
          id="contact-name"
          placeholder="e.g. Rahul Sharma"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-mobile">Mobile number</Label>
        <Input
          id="contact-mobile"
          type="tel"
          inputMode="numeric"
          placeholder="98XXXXXXXX"
          {...register("mobile")}
        />
        {errors.mobile && (
          <p className="text-sm text-destructive">{errors.mobile.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          placeholder="How can we help you?"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full">
        <MessageCircle />
        Send message on WhatsApp
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        WhatsApp will open with your message already filled in. Just press
        Send.
      </p>
      <p className="text-center text-xs text-muted-foreground">
        By sending a message, you agree to our{" "}
        <Link href="/terms" className="font-medium text-primary hover:underline">
          Terms
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy-policy"
          className="font-medium text-primary hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}