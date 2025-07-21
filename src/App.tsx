// src/App.tsx
import ArtictCard from './components/ArtictCard';

function App() {
    const appTitle: string = "Sistemas de Recomendação e Trilhas de Aprendizagem.";
    const subTitle: string = "Referencial Teórico.";

    // Dados para nossos ProductCards
    const articles = [
        {
            id: 1,
            title: "Diretrizes para construção de trilhas de aprendizagem para desenvolvimento de profissionais do setor industrial da sociedade em transformação digital.",
            summary: "O conceito de trilhas de aprendizagem tem ganhado relevância no contexto da educação corporativa e formação profissional contínua. Aires e Freire (2021) defendem que trilhas bem estruturadas permitem o alinhamento entre os objetivos organizacionais e as necessidades de capacitação dos profissionais. No entanto, os autores identificam uma lacuna na sistematização das diretrizes para a construção dessas trilhas, principalmente em contextos de transformação digital. O SIRTP propõe uma abordagem inovadora ao utilizar sistemas de recomendação baseados em IA generativa, com foco nas exigências reais de vagasda área de TI. A partir da análise de competências demandadas para Backend, Frontend e Mobile, o sistema gera rotas de aprendizado personalizadas, organizadas por linguagem, frameworks e tecnologias.",
            author: "AIRES, Regina Wundrack do Amaral; FREIRE, Patrícia de Sá",
            year: 2021,
            isFeatured: true, // Este terá um badge de destaque
            link: "../pages/articleca_001"
        },
        {
            id: 2,
            title: "Uso de IA Generativa no Apoio à Aprendizagem de Programação.",
            summary: "Modelos de linguagem como o GPT são baseados em arquiteturas de transformers e utilizam técnicas como zero-shot prompting e retrieval-augmented generation (RAG), possibilitando respostas contextualizadas e adaptáveis ao perfil do usuário (BEM; KONZEN, 2024). Esses avanços tecnológicos fundamentam a proposta do Sistema Inteligente de Recomendação de Trilhas Profissionais (SIRTP), ao utilizar a IA para gerar recomendações de aprendizado baseadas em perfis individuais e dados reais do mercado de trabalho. ",
            author: "BEM, Rafael Almeida de; KONZEN, Andréa Aparecida ",
            year: 2024,
        },
          {
            id: 3,
            title: "Engenharia de requisitos auxiliada por chatbots inteligentes: uma avaliação da qualidade dos artefatos ",
            summary: "A Engenharia de Requisitos é um processo crítico para o desenvolvimento de software, responsável pela coleta, análise e documentação de necessidades dos usuários. Damasceno (2024) destaca que a escassez de profissionais qualificados nessa área tem gerado produtos com falhas decorrentes de requisitos mal definidos. Em seu estudo, o autor avalia o uso de chatbots baseados em IA generativa como apoio à elicitação de requisitos, observando que esses sistemas podem ampliar o escopo das informações coletadas. No SIRTP, essa abordagem é aplicada na fase de diagnóstico do perfil do usuário, permitindo capturar de forma conversacional suas experiências, formações e interesses. Através do uso de prompts adequados, o sistema interpreta essas informações e as utiliza como base para a recomendação de trilhas formativas. ",
            author: "DAMASCENO, Joeldson Costa.",
            year: 2024,
        },
        {
            id: 4,
            title: "Exploração de técnicas de engenharia de prompt para aprimorar os resultados do uso de LLM no TCMRio ",
            summary: "A qualidade das respostas geradas por modelos de linguagem está diretamente relacionada à formulação dos prompts. Nascimento (2024) investigou a aplicação de técnicas de engenharia de prompt no contexto do Tribunal de Contas do Município do Rio de Janeiro (TCMRio), demonstrando que pequenas alterações na estrutura dos comandos influenciam significativamente os resultados. O SIRTP utiliza esses princípios para garantir que as interações com a IA sejam produtivas e coerentes, aumentando a eficácia das trilhas recomendadas. O refinamento de prompts permite que o sistema gere sugestões mais precisas de cursos, tecnologias e práticas, de acordo com o nível atual do usuário e as demandas do mercado. ",
            author: "NASCIMENTO, Jefferson Rodrigues do.",
            year: 2024,
        },
         {
            id: 5,
            title: "Inteligência Artificial",
            summary: "A inteligência artificial (IA) tem sido objeto de ampla pesquisa nas últimas décadas, com aplicações cada vez mais robustas em áreas como educação, saúde, indústria e mercado financeiro. Segundo Russell e Norvig (2016), a IA é o campo da ciência da computação que busca desenvolver sistemas capazes de realizar tarefas que, se feitas por humanos, requereriam inteligência. Com o advento dos Large Language Models (LLMs), como o GPT, tornou-se possível interpretar linguagem natural, gerar textos coerentes e fornecer respostas personalizadas com alto grau de precisão. ",
            author: "RUSSELL, Stuart; NORVIG, Peter",
            year: 2016,
        }
    ];

    return (
        <div className="container-fluid">
            <header
                className="py-4 px-3 m-3 text-white text-center"
                style={{ backgroundColor: '#563d7c' }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">{appTitle}</h1>
                    <p className="lead col-lg-8 mx-auto">{subTitle}</p>
                </div>
            </header>

            <div className="container">
                <main>
                    <p className="lead">
                        Sistemas de Recomendação e Trilhas de Aprendizagem!
                    </p>

                    {/* Status da aplicação */}
                    <div className="my-4 p-3 bg-light rounded shadow-sm">
                        <h5 className="mb-3">Referencial Teórico: também chamado de fundamentação teórica, marco teórico ou revisão bibliográfica, é a parte de um trabalho acadêmico que apresenta o conjunto de teorias, conceitos e estudos prévios relacionados ao tema pesquisado. </h5>
                        <p>Data de hoje: {new Date().toLocaleDateString()}</p>
                        
                    </div>

                    {/* SEÇÃO DE PRODUTOS */}
                    <section className="my-5">
                        <h2 className="text-center mb-4">Nossos Produtos</h2>
                        <div className="row">
                            {/* Produtos apresentados individualmente */}
                            <ArtictCard 
                                title={articles[0].title}
                                summary={articles[0].summary}
                                author={articles[0].author}
                                year={articles[0].year}
                                isFeatured={articles[0].isFeatured}
                                link="/articleca_001"
                            />
                            <ArtictCard 
                                title={articles[1].title}
                                summary={articles[1].summary}
                                author={articles[1].author}
                                year={articles[1].year}
                            />
                            <ArtictCard 
                                title={articles[2].title}
                                summary={articles[2].summary}
                                author={articles[2].author}
                                year={articles[2].year}
                                isFeatured={false}
                            />
                            <ArtictCard 
                                title={articles[3].title}
                                summary={articles[3].summary}
                                author={articles[3].author}
                                year={articles[3].year}
                                isFeatured={false}
                                link="/articleca_004"
                            />
                        </div>
                    </section>

                </main>

                <footer className="mt-5 py-4 border-top">
                    <p className="text-center text-muted">© {new Date().getFullYear()} Alexandre de Souza Eustaquio - IFSudeste.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
