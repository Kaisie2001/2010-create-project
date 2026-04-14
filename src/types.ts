export type Step = 1 | 2 | 3 | 4;

export interface ProjectData {
  projectName: string;
  projectId: string;
  clientName: string;
  buildingName: string;
  district: string;
  floorUnit: string;
  projectType: string;
  projectStage: string;
  partitionArea: string;

  partitionSystem: {
    type: string;
    format: string;
    boardType: string;
    layersPerSide: number;
    studFrameType: string;
    connectionType: string;
    fireRating: number;
    acousticRating: number;
  };

  dataInput: {
    sourceType: 'HK_DEFAULT' | 'SUPPLIER' | 'EPD';
    materialBreakdown: string;
    eolPathwayKnown: boolean;
    evidenceLevel: 'L1' | 'L2' | 'L3';
  };
}

export const INITIAL_DATA: ProjectData = {
  projectName: 'Apex Tower Corporate Fit-out',
  projectId: 'AL-2024-0892',
  clientName: '',
  buildingName: 'Apex Tower',
  district: 'Central Business District',
  floorUnit: 'Level 42, Suite 400',
  projectType: 'New Fit-out',
  projectStage: 'Concept Design',
  partitionArea: '1250',

  partitionSystem: {
    type: 'Internal Non-Loadbearing',
    format: 'Single Frame',
    boardType: 'Type F Fire Rated Plasterboard',
    layersPerSide: 2,
    studFrameType: '70mm C-Stud Metal',
    connectionType: 'Deflection Head',
    fireRating: 60,
    acousticRating: 54,
  },

  dataInput: {
    sourceType: 'HK_DEFAULT',
    materialBreakdown: 'Detailed breakdown available',
    eolPathwayKnown: true,
    evidenceLevel: 'L2',
  },
};
