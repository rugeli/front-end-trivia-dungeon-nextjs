import Link from 'next/link'

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <h1>Trivia Dungeon</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/quiz"><a>Play</a></Link>
      <Link href="/leaderboard"><a>Leaderboard</a></Link>
      <Link href="/authentication"><a>LogIn/SignUp</a></Link>

    </nav>
  );
}

export default Navbar;