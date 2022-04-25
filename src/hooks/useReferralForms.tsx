import { useState, useEffect } from 'react';

import { DefaultClient } from '@prismicio/client/types/client';

enum ReferralForms {
  aftercare_criteria_form = 'aftercare_criteria_form',
  aftercare_referral_form = 'aftercare_referral_form',
  criteria_for_assessment = 'criteria_for_assessment',
  day_programme_referral_form = 'day_programme_referral_form',
  information_brochure = 'information_brochure',
  room_rental_booklet = 'room_rental_booklet',
}

interface IForm {
  aftercareCriteriaForm: string;
  aftercareReferralForm: string;
  criteriaForAssessment: string;
  dayProgrammeReferralForm: string;
  informationBrochure: string;
  roomRentalBooklet: string;
}

const useRefferalForms = (prismic: DefaultClient) => {
  const REFERRAL_ID = 'Ymb-UBIAAK4i8ywI';
  const [forms, setForms] = useState<IForm>();

  const getRefferalForms = async () => {
    try {
      const { data } = await prismic.getByID(REFERRAL_ID, {});
      console.log(data);
      const aftercareCriteriaForm = data[ReferralForms.aftercare_criteria_form]
        .url as string;
      const aftercareReferralForm = data[ReferralForms.aftercare_referral_form]
        .url as string;
      const criteriaForAssessment = data[ReferralForms.criteria_for_assessment]
        .url as string;
      const dayProgrammeReferralForm = data[
        ReferralForms.day_programme_referral_form
      ].url as string;
      const informationBrochure = data[ReferralForms.information_brochure]
        .url as string;
      const roomRentalBooklet = data[ReferralForms.room_rental_booklet]
        .url as string;

      const formData = {
        aftercareCriteriaForm,
        aftercareReferralForm,
        criteriaForAssessment,
        dayProgrammeReferralForm,
        informationBrochure,
        roomRentalBooklet,
      };
      setForms(formData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRefferalForms();
  }, []);

  return { forms };
};

export { useRefferalForms };
