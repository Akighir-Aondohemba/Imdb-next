import Results from "@/app/components/Results";

export default async function SearchPage({ params }) {
    const searchTerm = params.searchTerm;
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
    );
    const data = await res.json();
    const results = data.results;
  return (
    <div>
        {
            results && results.length ===  (
                <h1 className="text-center pt-6">No result found</h1>
            )
        }
        {results && <Results results={results} /> }
    </div>
  )
}
