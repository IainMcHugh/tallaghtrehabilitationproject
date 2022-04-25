import { useState, useEffect } from 'react';

import { DefaultClient } from '@prismicio/client/types/client';
import { IMediaItem } from 'types';

interface IAudits {
  name: string;
  url: string;
}

const useAuditedAccounts = (prismic: DefaultClient) => {
  const ACCOUNTS_ID = 'YmcP1hIAAJQc83tH';
  const [audits, setAudits] = useState<IAudits[]>();

  const getAuditedAccounts = async () => {
    try {
      const response = await prismic.getByID(ACCOUNTS_ID, {});
      const data = response.data as { [key: string]: IMediaItem };
      const auditsArr: IAudits[] = [];
      Object.entries(data).forEach(([k, v]) => {
        auditsArr.push({ name: mapKeyToName(k), url: v.url });
      });
      setAudits(auditsArr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuditedAccounts();
  }, []);

  const mapKeyToName = (keyValue: string) => {
    return `TRP ${keyValue.replaceAll('_', ' ')}`;
  };

  return { audits, mapKeyToName };
};

export { useAuditedAccounts };
