import React, {useEffect, useState} from 'react';

export default function Products() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    useEffect(() => {
        fetch(`data/${checked ? 'sale_': ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
                setProducts(data);
            });

        return () => {
            console.log("clear!! 깨끗하게 청소하는 일을 합ㄴ디ㅏ.")
        }
    }, [checked])


    return (
        <>
            <input type="checkbox" value={checked} id="checkbox" onChange={handleChange}/>
            <label htmlFor="checkbox">데이터 받아ㅗㅇㅁ</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </>
    );
}
