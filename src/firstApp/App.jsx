
const products = [
    { title: 'Cabbage', isFruit: false, id: 1},
    { title: 'Garlic', isFruit: false, id: 2},
    { title: 'Apple', isFruit: true, id: 3},
];

const listItems = products.map( product => 
    <li 
        key={ product.id }
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
        { product.title }
    </li>
);


const handleClick = () => {
    alert('You just clicked me');
};

const MyButton = () => {
    return (
        <button onClick={ handleClick } >
            Click me
        </button>
    );
}

export const CounterApp = () => {
    return (
        <>
            <h1>Welcome to my App</h1>
            
            <div>
                <ul>
                    { listItems }
                </ul>
            </div>
            
        </>
    );
}
