export default function EmailVerificationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          ✅ Félicitations, ton email est validé !
        </h1>

        <p className="mt-4 text-base md:text-lg opacity-80">
          Tu peux maintenant retourner dans l’app Gaia pour continuer ton inscription à la bêta.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border"
          >
            Retourner sur Gaia
          </a>

          <a
            href="/"
            className="text-sm underline underline-offset-4 opacity-70 self-center"
          >
            Revenir à l’accueil
          </a>
        </div>

        <p className="mt-6 text-xs opacity-60">
          Si le bouton ne fonctionne pas, ouvre Gaia manuellement sur ton téléphone.
        </p>
      </div>
    </main>
  );
}
