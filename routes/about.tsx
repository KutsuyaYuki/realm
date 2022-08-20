/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import DefaultLayout from "@components/DefaultLayout.tsx";
import { tw } from "@utils/twind.ts";
import { quotes } from "@utils/quotes.ts";

export const handler: Handlers<{
  quote: string;
}> = {
  GET(_req, ctx) {
    const randomIndex = Math.floor(Math.random() * 20);
    const body = {
      quote: quotes[randomIndex],
    };

    return ctx.render(body);
  },
};

export default function Posts(
  props: PageProps<{
    quote: string;
  }>,
) {
  return (
    <DefaultLayout
      title="About Me"
      desc="A brief description of me."
      active="about"
    >
      <header
        className={tw`py-24 w-full flex flex-col md:flex-row justify-center items-center gap-5`}
      >
        <div className={tw`flex flex-col justify-center items-center`}>
          <p className={tw`text-dark-text font-bold text-3xl font-heading`}>
            About Me
          </p>
          <p className={tw`w-full text-dark-accent-solid text-lg`}>
            A brief description of me.
          </p>
        </div>
      </header>
      <section
        className={tw`flex flex-col w-full bg-dark-nav py-4 px-5 rounded-xl mb-5`}
      >
        <p
          className={tw`text-2xl rounded-xl font-bold text-dark-text mt-1 mb-3 px-4 py-2 bg-dark-accent-semitrans text-center font-heading`}
        >
          Description
        </p>
        <p
          className={tw`bg-dark-accent-semitrans text-dark-text px-5 py-2 rounded-xl border-l-4 border-dark-accent-solid`}
        >
          {props.data.quote}
        </p>
        <p className={tw`text-dark-text mt-3`}>
          Hello, my name's Irvan Malik Azantha. I'm a 19 y'o man currently
          studying on Universitas Sriwijaya. I live in Palembang, Indonesia. I'm
          a highly enthusiastic person with subtle interest in open source
          projects and keen on learning new things.
        </p>
        <p className={tw`text-dark-text mt-3`}>
          I've started programming since 2020 (2018 actually but that's mostly
          just buzzing around with stuffs) and I've been pretty much hooked up
          with it until now. You might find me annoying sometimes (if you know
          me or somehow make a contact with me in one of social media platforms
          where I simply exist) but that's what I tend to always do to just have
          fun. No offense given at all. And finally,{" "}
          <a
            className={tw`text-dark-accent-solid hover:text-dark-text transition-all ease-linear duration-200 break-all`}
            href="https://t.me/gnuweeb"
          >
            GNU/Weeb
          </a>{" "}
          is my place where I moderate and also contribute to nowadays.
        </p>
        <p
          className={tw`text-2xl rounded-xl font-bold text-dark-text my-3 px-4 py-2 bg-dark-accent-semitrans text-center font-heading`}
        >
          About This Website
        </p>
        <p
          className={tw`bg-dark-accent-semitrans text-dark-text px-5 py-2 rounded-xl border-l-4 border-dark-accent-solid`}
        >
          A brief description about this website I made.
        </p>
        <p className={tw`text-dark-text mt-3`}>
          So yeah, this is my website. It's that simple. <strong>Oh,</strong>
          {" "}
          you guys <em>want</em> to hear <strong>the story</strong>{" "}
          behind it! To make it summed up and described real quick, this website
          is first made out of pure curiosity. It was back at the days when I
          was still a CS freshmen. At one day, in a specific web development
          course, I think to myself, "It would be nice to have a website where I
          can do <em>whatever the f*ck</em>{" "}
          I want". And yes, there you have it, a blog.
        </p>
        <p className={tw`text-dark-text mt-3`}>
          This website is made with Deno's{" "}
          <a
            className={tw`text-dark-accent-solid hover:text-dark-text transition-all ease-linear duration-200 break-all`}
            href="https://fresh.deno.dev/"
          >
            fresh
          </a>{" "}
          framework. The tools for stylings are provided by{" "}
          <a
            className={tw`text-dark-accent-solid hover:text-dark-text transition-all ease-linear duration-200 break-all`}
            href="https://twind.dev/"
          >
            Twind
          </a>{" "}
          (it's essentially just{" "}
          <a
            className={tw`text-dark-accent-solid hover:text-dark-text transition-all ease-linear duration-200 break-all`}
            href="https://tailwindcss.com/"
          >
            Tailwind
          </a>{" "}
          but the entire thing is CSS-in-JS). This website is hosted on{" "}
          <a
            className={tw`text-dark-accent-solid hover:text-dark-text transition-all ease-linear duration-200 break-all`}
            href="https://deno.com/deploy"
          >
            Deno Deploy
          </a>
          . And yes, I know my stack is pretty <em>edgy</em> (or should I say,
          {" "}
          <em>bleeding edge</em>?) but this is my website. I can do whatever I
          want with it.
        </p>
        <p
          className={tw`text-2xl rounded-xl font-bold text-dark-text my-3 px-4 py-2 bg-dark-accent-semitrans text-center font-heading`}
        >
          Stuffs I Like
        </p>
        <p
          className={tw`bg-dark-accent-semitrans text-dark-text px-5 py-2 rounded-xl border-l-4 border-dark-accent-solid`}
        >
          Bunch of things I like to do or see.
        </p>
        <ul
          className={tw`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 list-disc list-inside my-3`}
        >
          <li>Watching Anime</li>
          <li>Coding</li>
          <li>Blogging</li>
          <li>Playing Azur Lane</li>
          <li>Eating cheese</li>
          <li>Drinking coffee</li>
          <li>Playing games</li>
          <li>Sleeping</li>
          <li>Chaos</li>
          <li>Hanging out</li>
          <li>Money</li>
          <li>Peace</li>
        </ul>
        <p
          className={tw`text-2xl rounded-xl font-bold text-dark-text my-3 px-4 py-2 bg-dark-accent-semitrans text-center font-heading`}
        >
          Current Affiliation
        </p>
        <p
          className={tw`bg-dark-accent-semitrans text-dark-text px-5 py-2 rounded-xl border-l-4 border-dark-accent-solid`}
        >
          Organizations and/or communities that I participate in.
        </p>
        <ul
          className={tw`grid grid-cols-1 xl:grid-cols-2 list-disc list-inside my-3`}
        >
          <li>CompSci Student at Universitas Sriwijaya</li>
          <li>Contributor and Moderator at GNU/Weeb</li>
          <li>Contributor and Moderator at Wibutech</li>
          <li>Member of Web Development Team at GDSC Unsri</li>
          <li>Co-Founder and Co-Lead at Avaritia Clo. (Ltd.)</li>
          <li>Voluntary Member of HMIF Unsri (Srifoton)</li>
        </ul>
        <p
          className={tw`text-2xl rounded-xl font-bold text-dark-text my-3 px-4 py-2 bg-dark-accent-semitrans text-center font-heading`}
        >
          Tools
        </p>
        <p
          className={tw`bg-dark-accent-semitrans text-dark-text px-5 py-2 rounded-xl border-l-4 border-dark-accent-solid`}
        >
          Tools/Languages that I use.
        </p>
        <ul
          className={tw`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 list-disc list-inside my-3`}
        >
          <li>GNU/Linux</li>
          <li>Java</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>HTML5/CSS3</li>
          <li>Tailwind</li>
          <li>React/Preact</li>
          <li>PHP</li>
          <li>Go</li>
          <li>Node.js</li>
          <li>Deno</li>
          <li>Firebase/Supabase</li>
        </ul>
      </section>
    </DefaultLayout>
  );
}
