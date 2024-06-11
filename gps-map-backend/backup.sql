PGDMP  %    #                |         
   mydatabase    16.3 (Debian 16.3-1.pgdg120+1)    16.3 (Debian 16.3-1.pgdg120+1) ;    ]           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ^           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            _           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            `           1262    16384 
   mydatabase    DATABASE     u   CREATE DATABASE mydatabase WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
    DROP DATABASE mydatabase;
                root    false                        2615    26995    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                root    false            a           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                   root    false    5            b           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                   root    false    5            �            1259    26996    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    root    false    5            �            1259    27087    bookings    TABLE     �   CREATE TABLE public.bookings (
    id integer NOT NULL,
    "clientId" integer NOT NULL,
    "carId" integer NOT NULL,
    "endDate" timestamp(3) without time zone NOT NULL,
    "startDate" timestamp(3) without time zone NOT NULL
);
    DROP TABLE public.bookings;
       public         heap    root    false    5            �            1259    27086    bookings_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bookings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.bookings_id_seq;
       public          root    false    5    217            c           0    0    bookings_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.bookings_id_seq OWNED BY public.bookings.id;
          public          root    false    216            �            1259    27094    cars    TABLE     �   CREATE TABLE public.cars (
    id integer NOT NULL,
    model text NOT NULL,
    "VIN" text NOT NULL,
    "Plate" text NOT NULL,
    "Year" integer NOT NULL,
    "isRented" boolean DEFAULT false NOT NULL
);
    DROP TABLE public.cars;
       public         heap    root    false    5            �            1259    27104    carsDetails    TABLE       CREATE TABLE public."carsDetails" (
    id integer NOT NULL,
    "carId" integer NOT NULL,
    "Color" text NOT NULL,
    "Specifications" text NOT NULL,
    "Completation" text NOT NULL,
    "isFuel" boolean DEFAULT false NOT NULL,
    "capacityLevel" integer NOT NULL
);
 !   DROP TABLE public."carsDetails";
       public         heap    root    false    5            �            1259    27103    carsDetails_id_seq    SEQUENCE     �   CREATE SEQUENCE public."carsDetails_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."carsDetails_id_seq";
       public          root    false    221    5            d           0    0    carsDetails_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."carsDetails_id_seq" OWNED BY public."carsDetails".id;
          public          root    false    220            �            1259    27093    cars_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.cars_id_seq;
       public          root    false    219    5            e           0    0    cars_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.cars_id_seq OWNED BY public.cars.id;
          public          root    false    218            �            1259    27114    clients    TABLE     �   CREATE TABLE public.clients (
    id integer NOT NULL,
    name text NOT NULL,
    "phoneNumber" text NOT NULL,
    "IDNP" text NOT NULL
);
    DROP TABLE public.clients;
       public         heap    root    false    5            �            1259    27113    clients_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.clients_id_seq;
       public          root    false    223    5            f           0    0    clients_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;
          public          root    false    222            �            1259    27123    rentals    TABLE     �   CREATE TABLE public.rentals (
    id integer NOT NULL,
    "clientId" integer NOT NULL,
    "carId" integer NOT NULL,
    "endDate" timestamp(3) without time zone NOT NULL,
    "startDate" timestamp(3) without time zone NOT NULL
);
    DROP TABLE public.rentals;
       public         heap    root    false    5            �            1259    27122    rentals_id_seq    SEQUENCE     �   CREATE SEQUENCE public.rentals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.rentals_id_seq;
       public          root    false    5    225            g           0    0    rentals_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.rentals_id_seq OWNED BY public.rentals.id;
          public          root    false    224            �            1259    27130    tracking    TABLE     �   CREATE TABLE public.tracking (
    id integer NOT NULL,
    "rentalId" integer NOT NULL,
    "timestamp" timestamp(3) without time zone NOT NULL,
    fuel double precision NOT NULL,
    coordinates jsonb NOT NULL
);
    DROP TABLE public.tracking;
       public         heap    root    false    5            �            1259    27129    tracking_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tracking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.tracking_id_seq;
       public          root    false    5    227            h           0    0    tracking_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.tracking_id_seq OWNED BY public.tracking.id;
          public          root    false    226            �           2604    27090    bookings id    DEFAULT     j   ALTER TABLE ONLY public.bookings ALTER COLUMN id SET DEFAULT nextval('public.bookings_id_seq'::regclass);
 :   ALTER TABLE public.bookings ALTER COLUMN id DROP DEFAULT;
       public          root    false    216    217    217            �           2604    27097    cars id    DEFAULT     b   ALTER TABLE ONLY public.cars ALTER COLUMN id SET DEFAULT nextval('public.cars_id_seq'::regclass);
 6   ALTER TABLE public.cars ALTER COLUMN id DROP DEFAULT;
       public          root    false    218    219    219            �           2604    27107    carsDetails id    DEFAULT     t   ALTER TABLE ONLY public."carsDetails" ALTER COLUMN id SET DEFAULT nextval('public."carsDetails_id_seq"'::regclass);
 ?   ALTER TABLE public."carsDetails" ALTER COLUMN id DROP DEFAULT;
       public          root    false    220    221    221            �           2604    27117 
   clients id    DEFAULT     h   ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);
 9   ALTER TABLE public.clients ALTER COLUMN id DROP DEFAULT;
       public          root    false    222    223    223            �           2604    27126 
   rentals id    DEFAULT     h   ALTER TABLE ONLY public.rentals ALTER COLUMN id SET DEFAULT nextval('public.rentals_id_seq'::regclass);
 9   ALTER TABLE public.rentals ALTER COLUMN id DROP DEFAULT;
       public          root    false    225    224    225            �           2604    27133    tracking id    DEFAULT     j   ALTER TABLE ONLY public.tracking ALTER COLUMN id SET DEFAULT nextval('public.tracking_id_seq'::regclass);
 :   ALTER TABLE public.tracking ALTER COLUMN id DROP DEFAULT;
       public          root    false    226    227    227            N          0    26996    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          root    false    215   0C       P          0    27087    bookings 
   TABLE DATA           S   COPY public.bookings (id, "clientId", "carId", "endDate", "startDate") FROM stdin;
    public          root    false    217   �D       R          0    27094    cars 
   TABLE DATA           M   COPY public.cars (id, model, "VIN", "Plate", "Year", "isRented") FROM stdin;
    public          root    false    219   )E       T          0    27104    carsDetails 
   TABLE DATA           z   COPY public."carsDetails" (id, "carId", "Color", "Specifications", "Completation", "isFuel", "capacityLevel") FROM stdin;
    public          root    false    221   �E       V          0    27114    clients 
   TABLE DATA           B   COPY public.clients (id, name, "phoneNumber", "IDNP") FROM stdin;
    public          root    false    223   �E       X          0    27123    rentals 
   TABLE DATA           R   COPY public.rentals (id, "clientId", "carId", "endDate", "startDate") FROM stdin;
    public          root    false    225   !F       Z          0    27130    tracking 
   TABLE DATA           R   COPY public.tracking (id, "rentalId", "timestamp", fuel, coordinates) FROM stdin;
    public          root    false    227   _F       i           0    0    bookings_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.bookings_id_seq', 1, false);
          public          root    false    216            j           0    0    carsDetails_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."carsDetails_id_seq"', 1, false);
          public          root    false    220            k           0    0    cars_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.cars_id_seq', 1, false);
          public          root    false    218            l           0    0    clients_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.clients_id_seq', 1, false);
          public          root    false    222            m           0    0    rentals_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.rentals_id_seq', 1, false);
          public          root    false    224            n           0    0    tracking_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.tracking_id_seq', 3, true);
          public          root    false    226            �           2606    27092    bookings Bookings_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT "Bookings_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.bookings DROP CONSTRAINT "Bookings_pkey";
       public            root    false    217            �           2606    27112    carsDetails CarsDetails_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."carsDetails"
    ADD CONSTRAINT "CarsDetails_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."carsDetails" DROP CONSTRAINT "CarsDetails_pkey";
       public            root    false    221            �           2606    27102    cars Cars_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.cars
    ADD CONSTRAINT "Cars_pkey" PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.cars DROP CONSTRAINT "Cars_pkey";
       public            root    false    219            �           2606    27121    clients Clients_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT "Clients_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.clients DROP CONSTRAINT "Clients_pkey";
       public            root    false    223            �           2606    27137    tracking Tracking_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.tracking
    ADD CONSTRAINT "Tracking_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.tracking DROP CONSTRAINT "Tracking_pkey";
       public            root    false    227            �           2606    27004 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            root    false    215            �           2606    27128    rentals rentals_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.rentals
    ADD CONSTRAINT rentals_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.rentals DROP CONSTRAINT rentals_pkey;
       public            root    false    225            �           1259    27138    CarsDetails_carId_key    INDEX     [   CREATE UNIQUE INDEX "CarsDetails_carId_key" ON public."carsDetails" USING btree ("carId");
 +   DROP INDEX public."CarsDetails_carId_key";
       public            root    false    221            �           2606    27139    bookings Bookings_carId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT "Bookings_carId_fkey" FOREIGN KEY ("carId") REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 H   ALTER TABLE ONLY public.bookings DROP CONSTRAINT "Bookings_carId_fkey";
       public          root    false    217    3247    219            �           2606    27144    bookings Bookings_clientId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT "Bookings_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 K   ALTER TABLE ONLY public.bookings DROP CONSTRAINT "Bookings_clientId_fkey";
       public          root    false    217    223    3252            �           2606    27149 "   carsDetails CarsDetails_carId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."carsDetails"
    ADD CONSTRAINT "CarsDetails_carId_fkey" FOREIGN KEY ("carId") REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 P   ALTER TABLE ONLY public."carsDetails" DROP CONSTRAINT "CarsDetails_carId_fkey";
       public          root    false    221    3247    219            �           2606    27164    tracking Tracking_rentalId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tracking
    ADD CONSTRAINT "Tracking_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES public.rentals(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 K   ALTER TABLE ONLY public.tracking DROP CONSTRAINT "Tracking_rentalId_fkey";
       public          root    false    227    225    3254            �           2606    27154    rentals rentals_carId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rentals
    ADD CONSTRAINT "rentals_carId_fkey" FOREIGN KEY ("carId") REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 F   ALTER TABLE ONLY public.rentals DROP CONSTRAINT "rentals_carId_fkey";
       public          root    false    219    3247    225            �           2606    27159    rentals rentals_clientId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rentals
    ADD CONSTRAINT "rentals_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 I   ALTER TABLE ONLY public.rentals DROP CONSTRAINT "rentals_clientId_fkey";
       public          root    false    3252    223    225            N   �  x�}�[��1���U��8�jYYDW0�#�J��)3��럔6�0��}��Ig�ቑK��$� K%�Z���P3B�F-|Z�J��G�]�ؽ�HF�@�ڬ�{�1&H������D(�+�o!��QA�.�����m�g:Tw�ex\
��r�,�{_�;&Ҁ\XG�vhȊ��c�Q���A1cXg�=���,���
��24��捲�?��P �_?{�F�nQ������l$w�m����Ԛ��Z��m��-ᝣ��0�a�M��,���uzn�T!ⵅ�e5�R0��(��<� �2�-z�>n�~�Ƶo;ا0&V�3��|�L�;&�MS)�)V&����a�YWxrLf3,����M��+q�u�ɵ.�\�vҎs�
u<�@8s>���<� pf�������=n����${���؝��t<��#      P   0   x�3�4�4�4202�50�54V04�20�21�3�0G����s��qqq 7n
m      R   S   x�3�t�W�5�424624B#NGw#����1g	�gPb^J~�BnbUJ"������1H�	�c�����!P��)gW� �y�      T   I   x�3�4�L/JM��V*J�K��UHI,IT�R�q�R���S�j�QR�ii�e�ię�S�J%3�8��b���� s�7�      V   ,   x�3�t.�,.�L���6676�NC#cS3sKc�=... �	9      X   .   x�3�4B##]3]C#C#+S+s=s��!�8W� 6�
g      Z   |   x�m�;�0���>E�X;�}�,n�h����L�Kߠ�0��d;��&٤�4�(u-��V�_���M�����'����}�����FA2��*�sP��"��W�9��yӐ� 	�8��k�zg*�     