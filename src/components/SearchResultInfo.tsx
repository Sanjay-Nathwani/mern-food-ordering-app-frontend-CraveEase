import { Link } from "react-router-dom";

type Props = {
    total: number;
    city: string;
}

const SearchResultInfo = ({total,city} : Props) => {


    return (
      <div className="flex flex-col text-xl font-bold gap-3 justify-between lg:items-center lg:flex-row">
        <span>
            {total} Restaurants found in {city}
            <Link to="/" className="ml-2 text-sm font-semibold underline cursor-pointer text-blue-500">Change Location</Link>
        </span>
      </div>
    );
}
 
export default SearchResultInfo;