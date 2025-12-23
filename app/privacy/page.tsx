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
              L'application collecte et traite les données suivantes :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Données stockées localement</h3>
                <p className="text-gray-700 leading-relaxed">
                  Les données relatives à votre progression, vos résultats de quiz, vos préférences et votre
                  statut d'abonnement sont stockées localement sur votre appareil et ne sont jamais transmises
                  à nos serveurs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Données analytiques anonymes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nous utilisons Firebase Analytics (Google) pour collecter des données d'usage anonymes afin
                  d'améliorer l'application. Ces données incluent : événements d'interaction (démarrage de quiz,
                  catégories sélectionnées), durée des sessions, et statistiques d'abonnement agrégées. Aucune
                  information personnellement identifiable n'est transmise.
                </p>
              </div>
            </div>
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
              <li>Statut d'abonnement (actif, expiré, période d'essai)</li>
              <li>Date d'expiration de l'abonnement</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Ces données restent sur votre appareil et ne sont pas synchronisées avec le cloud ou d'autres appareils.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Services tiers</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              L'application utilise les services tiers suivants :
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">4.1 Firebase Analytics (Google)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Service d'analyse d'utilisation qui collecte des données anonymes sur l'usage de l'application.
                  Politique de confidentialité : <a href="https://firebase.google.com/support/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">firebase.google.com/support/privacy</a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">4.2 App Store (Apple)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le traitement des paiements et la gestion des abonnements sont effectués par Apple via l'App Store.
                  Vos informations de paiement sont traitées directement par Apple et ne sont jamais accessibles à
                  notre application. Politique de confidentialité : <a href="https://www.apple.com/legal/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">apple.com/legal/privacy</a>
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-3">
              L'application ne contient pas de traceurs publicitaires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Abonnements et paiements</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">5.1 Informations d'abonnement</h3>
                <p className="text-gray-700 leading-relaxed">
                  L'application propose un abonnement mensuel au prix de 1.99 CHF avec un premier mois gratuit.
                  L'abonnement se renouvelle automatiquement sauf annulation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">5.2 Traitement des paiements</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tous les paiements sont traités par Apple via l'App Store. Nous ne collectons ni ne stockons
                  aucune information de carte de crédit ou de paiement. Seul le statut de votre abonnement
                  (actif/inactif) est stocké localement sur votre appareil.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">5.3 Annulation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez annuler votre abonnement à tout moment via les réglages de votre compte App Store.
                  L'annulation prendra effet à la fin de la période d'abonnement en cours. Instructions :
                  Réglages iOS → [Votre nom] → Abonnements → Anatomie UNIL.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">5.4 Remboursements</h3>
                <p className="text-gray-700 leading-relaxed">
                  Les demandes de remboursement doivent être adressées directement à Apple via l'App Store,
                  conformément à leur politique de remboursement.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Sécurité</h2>
            <p className="text-gray-700 leading-relaxed">
              La sécurité de vos données est assurée par les mécanismes de sécurité intégrés à votre système
              d'exploitation iOS. Nous vous recommandons de maintenir votre appareil à jour avec les dernières
              mises à jour de sécurité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Droits des utilisateurs</h2>
            <p className="text-gray-700 leading-relaxed">
              Conformément à la LPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
              <li>Droit d'accès à vos données (stockées localement sur votre appareil)</li>
              <li>Droit de rectification (via les paramètres de l'application)</li>
              <li>Droit de suppression (en désinstallant l'application ou en effaçant les données dans les réglages iOS)</li>
              <li>Droit d'annuler votre abonnement à tout moment (via les réglages de votre compte App Store)</li>
              <li>Droit de demander un remboursement (via Apple, conformément à leur politique)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Modifications de la politique</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter via
              l'Université de Lausanne (UNIL).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Juridiction</h2>
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
