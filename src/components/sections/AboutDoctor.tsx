import Image from "next/image";
import { Stethoscope, Users } from "lucide-react";
import { site } from "@/data/site";
import { doctors } from "@/data/doctors";
import { Reveal } from "@/components/Reveal";

export function AboutDoctor() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-16">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-bold">Meet your doctors</h2>
        <p className="mt-3 text-muted-foreground">
          Qualified doctors who come to your home, listen carefully and treat you
  with the same care they would give their own family. Serving families
  across {site.location}.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {doctors.map((doctor, index) => (
          <Reveal key={doctor.name} delay={index * 120} className="h-full">
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:flex-row">
              <div className="relative h-72 w-full shrink-0 overflow-hidden bg-linear-to-br from-teal-600 to-cyan-600 sm:h-auto sm:min-h-[280px] sm:w-48">
                {doctor.photo ? (
                  <Image
                    src={doctor.photo}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 640px) 192px, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Users className="size-12 text-white" />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-center p-6">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  <Stethoscope className="size-3.5" />
                  {doctor.role}
                </span>
                <h3 className="mt-4 text-xl font-bold">{doctor.name}</h3>
                <p className="mt-2 text-sm font-medium text-primary">
                  {doctor.qualification}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Available for home visits across {site.location}.
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}