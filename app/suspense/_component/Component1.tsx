import { delay } from "@/utils/delay";


const Component1 = async() => {
    await delay(5000);
    return (
        <div className="border-3 border-gray-600 rounded-md size-[500] p-2">
            <h1 className="text-2xl">This is Component 1 - Dynamic Content</h1>
        </div>
    );
};

export default Component1;