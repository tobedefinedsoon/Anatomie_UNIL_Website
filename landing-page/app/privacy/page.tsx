export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l'accueil
          </a>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Politique de confidentialité</h1>
          <p className="text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-CH')}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Anatomie UNIL est une application éducative développée pour l'apprentissage de l'anatomie musculaire.
              Nous respectons votre vie privée et nous engageons à protéger vos données personnelles conformément à
              la législation suisse, notamment la Loi fédérale sur la protection des données (LPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Collecte de données</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Aucune donnée personnelle n'est collectée par cette application.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              L'application Anatomie UNIL fonctionne entièrement en local sur votre appareil. Toutes les données
              relatives à votre progression, vos résultats de quiz et vos préférences sont stockées localement sur
              votre appareil et ne sont jamais transmises à nos serveurs ou à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Stockage des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Les données suivantes sont stockées localement sur votre appareil :
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
              <li>Historique de vos quiz</li>
              <li>Résultats et statistiques de progression</li>
              <li>Préférences de l'application</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Ces données restent sur votre appareil et ne sont pas synchronisées avec le cloud ou d'autres appareils.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Partage de données</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous ne partageons aucune donnée avec des tiers car nous ne collectons aucune donnée. L'application
              ne contient pas de traceurs publicitaires, d'outils d'analyse tiers ou de services de tracking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Sécurité</h2>
            <p className="text-gray-700 leading-relaxed">
              La sécurité de vos données est assurée par les mécanismes de sécurité intégrés à votre système
              d'exploitation iOS. Nous vous recommandons de maintenir votre appareil à jour avec les dernières
              mises à jour de sécurité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Droits des utilisateurs</h2>
            <p className="text-gray-700 leading-relaxed">
              Conformément à la LPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
              <li>Droit d'accès à vos données (stockées localement sur votre appareil)</li>
              <li>Droit de rectification (via les paramètres de l'application)</li>
              <li>Droit de suppression (en désinstallant l'application ou en effaçant les données dans les réglages iOS)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Modifications de la politique</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter via
              l'Université de Lausanne (UNIL).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Juridiction</h2>
            <p className="text-gray-700 leading-relaxed">
              Cette politique de confidentialité est régie par le droit suisse. Tout litige sera soumis à la
              juridiction exclusive des tribunaux suisses.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
