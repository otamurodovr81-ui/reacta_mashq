

// declaration function

// ex  arrow ....


export const Cards = ({item}) => {
    return <>
        <div className="card" key={item.id}>
            <img src={item.img} alt="" width={220} height={180} />
            <div className="card__body">
                <h1>{item.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur. {item.desc}</p>
            </div>
       </div>
    </>
}

