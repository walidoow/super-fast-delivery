import { Button } from "@/components/ui/button";
import { Category } from "@/pages/support";

type SupportSideBarProps = {
  onChangeCategory(category: string): void
}


const SupportSideBar = (props: SupportSideBarProps) => {

  const handleClickChange = (change: string) => {
    props.onChangeCategory(change);
  };

  return (
    <div className="flex py-8">
      <ul className="nav">
        <li
          className="flex p-2 rounded-xl  mx-8">
          <Button
            className={"w-full bg-transparent text-primary-dark-grey justify-start hover:bg-white"}
            onClick={() => handleClickChange(Category.MANAGE_ACCOUNT)}
          >
            Manage Account
          </Button>
        </li>
        <li className="flex p-2 rounded-xl  mx-8">
          <Button
            className={"w-full bg-transparent text-primary-dark-grey justify-start hover:bg-white"}
            onClick={() => handleClickChange(Category.OPEN_CS_SESSION)}
          >
            Open CS Session
          </Button>
        </li>
        <li className="flex p-2 rounded-xl  mx-8">
          <Button
            className={"w-full bg-transparent text-primary-dark-grey justify-start hover:bg-white"}
            onClick={() => handleClickChange(Category.RETURN_AND_REFUNDS)}
          >
            Returns and Refunds
          </Button>
        </li>
        <li className="flex p-2 rounded-xl  mx-8">
          <Button
            className={"w-full bg-transparent text-primary-dark-grey justify-start hover:bg-white"}
            onClick={() => handleClickChange(Category.CANCEL_ORDER)}
          >
            Cancel Order
          </Button>
        </li>
      </ul>
    </div>)
}

export default SupportSideBar;