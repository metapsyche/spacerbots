import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BlueprintsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BuildsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StructsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SemblesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SpacersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Blueprints {
  readonly id: string;
  readonly name?: string | null;
  readonly Builds?: (Builds | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Blueprints, BlueprintsMetaData>);
  static copyOf(source: Blueprints, mutator: (draft: MutableModel<Blueprints, BlueprintsMetaData>) => MutableModel<Blueprints, BlueprintsMetaData> | void): Blueprints;
}

export declare class Builds {
  readonly id: string;
  readonly name?: string | null;
  readonly Structs?: string | null;
  readonly Blueprint?: string | null;
  readonly blueprintsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Builds, BuildsMetaData>);
  static copyOf(source: Builds, mutator: (draft: MutableModel<Builds, BuildsMetaData>) => MutableModel<Builds, BuildsMetaData> | void): Builds;
}

export declare class Structs {
  readonly id: string;
  readonly name?: string | null;
  readonly sembles?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Structs, StructsMetaData>);
  static copyOf(source: Structs, mutator: (draft: MutableModel<Structs, StructsMetaData>) => MutableModel<Structs, StructsMetaData> | void): Structs;
}

export declare class Sembles {
  readonly id: string;
  readonly name?: string | null;
  readonly spacers?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Sembles, SemblesMetaData>);
  static copyOf(source: Sembles, mutator: (draft: MutableModel<Sembles, SemblesMetaData>) => MutableModel<Sembles, SemblesMetaData> | void): Sembles;
}

export declare class Spacers {
  readonly id: string;
  readonly name?: string | null;
  readonly color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Spacers, SpacersMetaData>);
  static copyOf(source: Spacers, mutator: (draft: MutableModel<Spacers, SpacersMetaData>) => MutableModel<Spacers, SpacersMetaData> | void): Spacers;
}