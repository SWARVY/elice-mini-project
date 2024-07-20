export interface Query {
  [key: string]: number | string | boolean | object;
}

export interface LogicalFilter {
  $and?: Query[];
  $or?: Query[];
}

export interface FilterConditions extends LogicalFilter {
  title?: string;
  status?: number;
  is_datetime_enrollable?: boolean;
}
