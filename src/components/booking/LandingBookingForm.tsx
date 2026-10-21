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

const services = ["Physician", "General Surgery", "General Medicine"] as const;

function todayStr() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function Req() {
  return <span className="text-destructive"> *</span>;
}

export function LandingBookingForm() {
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
      <div className="rounded-xl border bg-secondary/40 p-5 text-center">
        <p className="font-heading text-base font-bold">Opening WhatsApp…</p>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Press Send to complete your booking. If it didn&apos;t open,{" "}
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="ln-name">
          Name
          <Req />
        </Label>
        <Input id="ln-name" placeholder="Full name" {...register("name")} />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="ln-mobile">
          Mobile number
          <Req />
        </Label>
        <Input
          id="ln-mobile"
          type="tel"
          inputMode="numeric"
          placeholder="10-digit mobile number"
          {...register("mobile")}
        />
        {errors.mobile && (
          <p className="text-xs text-destructive">{errors.mobile.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="ln-address">
          Address
          <Req />
        </Label>
        <Textarea
          id="ln-address"
          rows={2}
          placeholder="House no., area, city, landmark"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-destructive">{errors.address.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label>
          Service
          <Req />
        </Label>
        <Controller
          name="service"
          control={control}
          defaultValue={undefined}
          render={({ field }) => (
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value ?? ""}
              className="flex flex-wrap gap-2"
            >
              {services.map((s) => (
                <Label
                  key={s}
                  htmlFor={`ln-${s}`}
                  className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-normal has-[button[data-state=checked]]:border-primary has-[button[data-state=checked]]:bg-secondary/50"
                >
                  <RadioGroupItem value={s} id={`ln-${s}`} />
                  {s}
                </Label>
              ))}
            </RadioGroup>
          )}
        />
        {errors.service && (
          <p className="text-xs text-destructive">{errors.service.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="ln-reason">
          Reason for visit
          <Req />
        </Label>
        <Textarea
          id="ln-reason"
          rows={2}
          placeholder="Symptoms / problem"
          {...register("reason")}
        />
        {errors.reason && (
          <p className="text-xs text-destructive">{errors.reason.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="ln-date">
            Date
            <Req />
          </Label>
          <Input
            id="ln-date"
            type="date"
            min={todayStr()}
            {...register("date")}
          />
          {errors.date && (
            <p className="text-xs text-destructive">{errors.date.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="ln-time">
            Time
            <Req />
          </Label>
          <Input id="ln-time" type="time" {...register("time")} />
          {errors.time && (
            <p className="text-xs text-destructive">{errors.time.message}</p>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full">
        <MessageCircle />
        Send booking on WhatsApp
      </Button>
    </form>
  );
}