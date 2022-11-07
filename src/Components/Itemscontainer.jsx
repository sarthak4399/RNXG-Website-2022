
import Items from "./Items"
import { COMMENTS, CLUB, OTHERLINKS, CONTACT_US} from "./Menus";
const Itemscontainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:px-8 px-5 py-9">
      <Items Links={COMMENTS} title="" />
      <Items Links={CLUB} title="CLUB" />
      <Items Links={OTHERLINKS} title="OTHERLINKS" />
      <Items Links={CONTACT_US} title="CONTACT_US" />
    </div>
  )
}

export default Itemscontainer
