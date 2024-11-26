import { Card } from "../../components/Card/Card";
import { Tabs } from "../../components/Tabs/Tabs";

export const MyBoard = () => {
  return (
    <>
      <Tabs />
      <div className="mt-6 grid grid-cols-4 gap-6">
        <div>
          <Card />
        </div>
      </div>
    </>
  );
};
