import { site } from "@/data/site";
import { founders } from "@/data/founders";
import { Reveal } from "@/components/Reveal";

export function Founders() {
    return (
        <section className="border-y bg-secondary/40">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <Reveal className="max-w-2xl">
                    <h2 className="text-3xl font-bold">The people behind {site.name}</h2>
                    <p className="mt-3 text-muted-foreground">
                        We started {site.name} with one idea: good healthcare should come to
                        you, not the other way around. Our founders lead the team with that
                        promise in mind.
                    </p>
                </Reveal>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {founders.map((founder, index) => (
                        <Reveal key={founder.name} delay={index * 120} className="h-full">
                            <div className="group relative h-full overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                                <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-teal-600 to-cyan-600" />
                                <h3 className="text-xl font-bold">{founder.name}</h3>
                                <p className="mt-2 text-sm font-medium text-primary">
                                    {founder.role}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}