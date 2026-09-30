"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.conifg";

export default function StudioPage() {
    return <NextStudio config={config} />;
}