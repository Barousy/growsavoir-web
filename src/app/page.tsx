// src/pages/index.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Bienvenue sur <span className="text-blue-600 dark:text-blue-400">GrowSavoir</span></h1>
      <p className="text-center max-w-xl mb-8 text-lg">
        Plateforme éducative et ludique pour les 3-16 ans, respectueuse des valeurs de l'islam. Apprends l'arabe, l'anglais, le français, l'informatique, et la religion selon la compréhension des pieux prédécesseurs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-md">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md transition-all">📚 Langues</button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg shadow-md transition-all">💻 Informatique</button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg shadow-md transition-all">🧠 Matières</button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg shadow-md transition-all">📖 Islam</button>
      </div>

      <div className="flex gap-6">
        <a href="/login" className="text-blue-400 hover:underline">Connexion</a>
        <a href="/about" className="text-blue-400 hover:underline">À propos</a>
      </div>
    </main>
  );
}
