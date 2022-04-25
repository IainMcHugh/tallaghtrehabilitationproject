import { useState, useEffect } from 'react';

import { DefaultClient } from '@prismicio/client/types/client';
import { IMediaItem } from 'types';

interface IReports {
  name: string;
  url: string;
}

const useAnnualReports = (prismic: DefaultClient) => {
  const REPORTS_ID = 'YmcZSRIAAK4i86X3';
  const [reports, setReports] = useState<IReports[]>();

  const getAnnualReports = async () => {
    try {
      const response = await prismic.getByID(REPORTS_ID, {});
      const data = response.data as { [key: string]: IMediaItem };
      const reportsArr: IReports[] = [];
      Object.entries(data).forEach(([k, v]) => {
        reportsArr.push({ name: mapKeyToName(k), url: v.url });
      });
      setReports(reportsArr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnnualReports();
  }, []);

  const mapKeyToName = (keyValue: string) => {
    return `TRP ${keyValue.replaceAll('_', ' ')}`;
  };

  return { reports, mapKeyToName };
};

export { useAnnualReports };
