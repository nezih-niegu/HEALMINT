FROM python3
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1
RUN mkdir /backEnd
WORKDIR /backEnd
COPY requirements.txt /backEnd/
RUN pip install -r requirements.txt
COPY . /backEnd/
RUN python backEnd/manage.py miakemigrations --settings=settings
RUN python backEnd/manage.py migrate --settings=settings
CMD python backEnd/manage.py runserver --settings=settings 0.0.0.0:8080
