import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Anatomie UNIL
            </h1>

            <p className="text-xl sm:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto">
              Maîtrisez l'anatomie musculaire avec des quiz interactifs
            </p>

            <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
              Apprenez l'origine, la terminaison, l'innervation et la vascularisation des muscles du corps humain de manière ludique et efficace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/ch/app/anatomie-unil/id1222411841"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                Télécharger sur l'App Store
              </a>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une application complète pour apprendre l'anatomie musculaire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Quiz interactifs</h3>
              <p className="text-gray-600">Questions à choix multiples sur l'anatomie musculaire</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">3 Catégories</h3>
              <p className="text-gray-600">Membre supérieur, inférieur et tronc</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Suivi des progrès</h3>
              <p className="text-gray-600">Historique et statistiques détaillées de vos quiz</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">4 Types de questions</h3>
              <p className="text-gray-600">Origine, terminaison, innervation, vascularisation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Aperçu de l'application
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez votre parcours pour valider le module BA3
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Screenshot 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <Image
                src="/screenshots/1-home.png"
                alt="Validez votre module BA3"
                width={400}
                height={800}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">Validez votre module BA3</h3>
                <p className="text-gray-600 text-sm">Choisissez votre catégorie d'apprentissage</p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <Image
                src="/screenshots/2-question-right.png"
                alt="Renforcez votre maîtrise anatomique"
                width={400}
                height={800}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">Renforcez votre maîtrise</h3>
                <p className="text-gray-600 text-sm">Chaque bonne réponse consolide votre apprentissage</p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <Image
                src="/screenshots/3-question-wrong.png"
                alt="Apprenez de vos erreurs"
                width={400}
                height={800}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">Apprenez de vos erreurs</h3>
                <p className="text-gray-600 text-sm">Comprenez vos erreurs pour progresser</p>
              </div>
            </div>

            {/* Screenshot 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <Image
                src="/screenshots/4-results.png"
                alt="Votre progression pour les examens"
                width={400}
                height={800}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">Votre progression pour les examens</h3>
                <p className="text-gray-600 text-sm">Suivez vos résultats en détail</p>
              </div>
            </div>

            {/* Screenshot 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <Image
                src="/screenshots/5-summary.png"
                alt="Revisitez vos erreurs, signalez les inexactitudes"
                width={400}
                height={800}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">Signalez les erreurs</h3>
                <p className="text-gray-600 text-sm">Contribuez en signalant les inexactitudes et gagnez des récompenses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à maîtriser l'anatomie musculaire ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Téléchargez l'application maintenant et commencez votre apprentissage
          </p>
          <a
            href="https://apps.apple.com/ch/app/anatomie-unil/id1222411841"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            Télécharger sur l'App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Anatomie UNIL</h3>
            <p className="mb-4">Application éducative pour l'apprentissage de l'anatomie musculaire</p>
            <div className="mb-4">
              <a
                href="/privacy"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Politique de confidentialité
              </a>
            </div>
            <p className="text-sm">© 2025 Anatomie UNIL. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
