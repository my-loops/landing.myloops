import type { FAQItemI } from "../types/faq.type";

export const faqs: FAQItemI[] = [
    {
        question: "Comment fonctionne la phase pilote ?",
        answer:
            "La phase pilote permet aux entreprises participantes de découvrir MyLoops et de contribuer à son développement. Les modalités précises sont communiquées lors de l'inscription.",
        isOpen: true,
    },
    {
        question: "Comment les candidats sont-ils évalués ?",
        answer:
            "MyLoops structure les informations des profils et peut intégrer les résultats des évaluations disponibles. Les méthodes et critères d'évaluation doivent être expliqués clairement aux entreprises.",
        isOpen: false,
    },
    {
        question: "Comment les données des candidats sont-elles protégées ?",
        answer:
            "Les conditions d'accès, d'utilisation et de conservation des données sont précisées dans notre politique de confidentialité.",
        isOpen: false,
    },
    {
        question: "Combien coûte MyLoops ?",
        answer:
            "Les informations relatives aux tarifs de MyLoops seront communiquées prochainement.",
        isOpen: false,
    },
];