import { Metadata } from "next";
import Navbar from "@/component/navbar/navbar";
import Footer from "@/component/footer/footer";
import TypingPracticeApp from "@/component/typing-practice-app/typing-practice-app";

export const metadata: Metadata = {
  title: "Interactive Government Typing Speed Test Simulator | Hartron Skill Centre Panipat",
  description:
    "Practice official HSSC, HKRN & High Court clerical government typing speed test drills online. Developed by Hartron Skill Centre Panipat under Manager Vijender Singh Nara.",
};

export default function TypingPracticePage() {
  return (
    <>
      <Navbar />
      <main>
        <TypingPracticeApp />
      </main>
      <Footer />
    </>
  );
}
