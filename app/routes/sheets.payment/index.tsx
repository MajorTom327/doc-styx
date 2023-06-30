import { Badge } from "react-daisyui";



import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import Paragraph from "~/components/Documentation/Paragraph";
import ErrorHandler from "~/components/ErrorHandler";

import addPaymentFormImg from "./add-payment-form.png";
import paymentPageImg from "./payment-page.png";

export const SheetsPayment = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>
          Paiement d'une fiche
          <Badge>Si la fiche a des services associé</Badge>
        </CustomCardTitle>

        <Paragraph>
          La page des paiements permet d'associer des paiements à une fiche. On
          peut ici informer qu'une fiche a ete payer en partie ou en totalité.
          Et on peut aussi noter le moyen de paiement utilisé pour la facture.
          Un résumé des paiments est affiché en haut de la page.
        </Paragraph>
        <DocImage src={paymentPageImg} alt="Page de liste des paiements" />

        <Paragraph>
          L'ajout d'un paiement se fait a travers la modale d'ajout de paiement
          qu'on accède en cliquant sur le bouton "+". On peut y selectionner le
          moyen de paiement, la date du paiement, le montant ainsi qu'une note
          sur le paiement (Par exemple y placer le numéro de chèque)
        </Paragraph>
        <DocImage src={addPaymentFormImg} alt="Modale d'ajout des paiements" />
      </CustomCard>
    </>
  );
};
export const ErrorBoundary = ErrorHandler;

export default SheetsPayment;
