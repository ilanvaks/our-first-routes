export default function Signup ( {setUser} ) {

  return (
    <section style= {{ background: "ffff0030"}}>
      <h1>Login</h1>
      <button onClick={() => setUser("Returning User")}> Signup</button>
    </section>
  )
}