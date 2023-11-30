import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className={`flex`}>
      <Input placeholder="Search our help library"/>
      <Button className="mx-3">Search</Button>
    </div>
  );
}

export default SearchBar;