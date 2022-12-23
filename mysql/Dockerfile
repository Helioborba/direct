FROM mysql

# env do MYSQL
ENV MYSQL_ROOT_PASSWORD=secret
ENV MYSQL_DATABASE=direct
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# copiar o query dump < adicionar o seu proprio
COPY ./DumpAdminer.sql  ./docker-entrypoint-initdb.d/DumpAdminer.sql

EXPOSE 3306

# remover um bug causado pelo group by
RUN /bin/bash -c echo 'sql-mode="STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION"' >> /etc/mysql/my.cnf



