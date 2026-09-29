"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

const services = ["Physician", "General Surgery", "General Medicine"] as const;

function todayStr() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export function BookingForm() {
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: undefined,
      name: "",
      mobile: "",
      address: "",
      reason: "",
      date: "",
      time: "",
    },
  });

  const onSubmit = (data: BookingInput) => {
    const url = buildWhatsAppUrl(data);
    window.open(url, "_blank");
    setWaUrl(url);

    fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});
  };

  if (waUrl) {
    return (
      <div className="rounded-2xl border bg-secondary/40 p-6 text-center">
        <p className="font-heading text-lg font-bold">
          Opening WhatsApp…
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Press Send in WhatsApp to complete your booking. If it didn&apos;t
          open,{" "}
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">
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
        <Label htmlFor="name">Your name</Label>
        <Input id="name" placeholder="Enter your full name" {...register("name")} />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="mobile">Mobile number</Label>
        <Input
          id="mobile"
          type="tel"
          inputMode="numeric"
          placeholder="Enter your mobile number"
          {...register("mobile")}
        />
        {errors.mobile && (
          <p className="text-sm text-destructive">{errors.mobile.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Full address</Label>
        <Textarea
          id="address"
          placeholder="House number, street, area, city, landmark"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-sm text-destructive">{errors.address.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Service needed</Label>
        <Controller
          name="service"
          control={control}
          defaultValue={undefined}
          render={({ field }) => (
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value ?? ""}
              className="gap-2"
            >
              {services.map((s) => (
                <Label
                  key={s}
                  htmlFor={s}
                  className="flex items-center gap-3 rounded-lg border p-3 font-normal has-[button[data-state=checked]]:border-primary has-[button[data-state=checked]]:bg-secondary/50"
                >
                  <RadioGroupItem value={s} id={s} />
                  {s}
                </Label>
              ))}
            </RadioGroup>
          )}
        />
        {errors.service && (
          <p className="text-sm text-destructive">{errors.service.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="reason">Reason for the visit</Label>
        <Textarea
          id="reason"
          placeholder="Write your symptoms"
          {...register("reason")}
        />
        {errors.reason && (
          <p className="text-sm text-destructive">{errors.reason.message}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="date">Preferred date</Label>
          <Input id="date" type="date" min={todayStr()} {...register("date")} />
          {errors.date && (
            <p className="text-sm text-destructive">{errors.date.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Preferred time</Label>
          <Input id="time" type="time" {...register("time")} />
          {errors.time && (
            <p className="text-sm text-destructive">{errors.time.message}</p>
          )}
        </div>
      </div>

            <Button type="submit" size="lg" className="w-full">
        <MessageCircle />
        Send booking on WhatsApp
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        WhatsApp will open with your details already filled in. Just press
        Send.
      </p>
      <p className="text-center text-xs text-muted-foreground">
        By booking, you agree to our{" "}
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