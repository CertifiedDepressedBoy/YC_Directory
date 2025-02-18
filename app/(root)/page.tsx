import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
    <section className="pink_container">
    <h1 className="heading">
        Pitch your Startup, <br/>
        Connect with Entrepreneurs
    </h1>

    <p className="sub-heading !max-w-3xl">
        Submit ideas, Vote on Pitches , and Get Noticed iin Virtual Competitions.
    </p>

    <SearchForm />

    </section>
    </>
  );
}
