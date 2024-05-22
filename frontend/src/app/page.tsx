import CardNowPlaying from "@/components/molecules/CardNowPlaying";

export default function Home() {
  return (
    <div style={{margin:"2.5rem auto", alignItems: "center", display: "flex", justifyContent: "center", flexWrap:"wrap", gap:"3rem" }}>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ margin: "20px auto" }}>Now Playing...</h2>
        <CardNowPlaying />
      </div>

      <div style={{height:"100vh", width:"1px", backgroundColor:"white"}}></div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ margin: "20px auto" }}>Coming Soon...</h2>
        <CardNowPlaying />
      </div>
    </div>
  );
}
