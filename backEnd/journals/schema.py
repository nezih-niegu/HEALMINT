import graphene
from graphene_django import DjangoObjectType

from .models import Journal


class JournalType(DjangoObjectType):
    class Meta:
        model = Journal


class Query(graphene.ObjectType):
    journals = graphene.List(JournalType)

    def resolve_journals(self, info, **kwargs):
        return Journal.objects.all()



class CreateJournal(graphene.Mutation):
    id = graphene.Int()
    title = graphene.String()
    body = graphene.String()

    #2
    class Arguments:
        title = graphene.String()
        body = graphene.String()

    #3
    def mutate(self, info, title, body):
        journal = Journal(title=title, body=body)
        journal.save()

        return CreateJournal(
            id=journal.id,
            title=journal.title,
            body=journal.body,
        )


#4
class Mutation(graphene.ObjectType):
    create_journal = CreateJournal.Field()