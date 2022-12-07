import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class JournalAtrribute{
    @Field(() => ID)
    key: string;

    @Field(() => String)
    value: string;
}

@ObjectType()
export class Journal {
    @Field(() => String)
    title: string;

    @Field(() => String)
    body: string;
}