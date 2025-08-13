export default function Button(props) {
    return (
        <>
        <button className="p-8 py-4 bg-red-600 rounded-2xl m-8">{props.name}</button>
        </>
    );
}