

export default function Card({id,name,url,avatar}){
    return (
        <div
          style={{
            display: "flex",
            gap: "2rem",
            border: "2px solid black",
            padding: "1rem",
            marginTop: "2rem",
            background: "gray"
          }}
        >
          <img width="100" src={avatar} alt={id} />
          <div>
            <h3>User Id: {id}</h3>
            <h3>{name}</h3>
            <h5>{url}</h5>
          </div>
        </div>
      );
}