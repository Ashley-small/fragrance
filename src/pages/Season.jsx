import { useParams, Link } from "react-router-dom";
import aftershave from "../utils/aftershave";
import Card3 from "../components/cards/Card3";

const Season = () => {
  let params = useParams();
  const capitalized =
    params.season.charAt(0).toUpperCase() + params.season.slice(1);
  let fragrances = aftershave.filter((aftershave) => {
    return aftershave.season === params.season;
  });

  return (
    <div>
      <h1 className="text-center text-3xl text-amber-800 font-bold mt-4 ">
        All {capitalized} Fragrances
      </h1>
      <div className="max-w-[1640px] mx-auto p-8 py-12 grid = md:grid-cols-2 lg:grid-cols-4 gap-3">
        {fragrances.map((fragrance) => (
          <Link to={"/details/" + fragrance.id}>
            <Card3
              image={fragrance.image}
              alt={fragrance.name}
              name={fragrance.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Season;
