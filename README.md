# AIC Workbench

AIC has been pivoted from a multi-agent company simulator into a personal multi-model AI workbench.

## Core idea

- Use OpenAI, Anthropic, and Gemini from one interface.
- Manual mode lets the user pick a model directly.
- Auto Select routes each prompt to the model predicted to perform best.
- Jev is the preferred router/evaluator when `TYPESAFE_API_KEY` is configured.
- GPT-6 Luna acts as a low-cost fallback router/evaluator.
- Every run stores model, task category, quality score, latency, token usage, and estimated cost.
- Historical performance feeds future routing decisions.

## Current models

- GPT-6 Astra / Sol
- Claude Fable 5.1 / Opus 5.5 / Sonnet 5
- Gemini 3.1 Pro / Gemini Flash

## Backend

Supabase:
- `aic-model-gateway-v2`
- `aic-auto-router`
- `aic-auto-evaluator`
- Workbench conversation, routing, run and benchmark tables with RLS

## Local setup

Copy `.env.example` to `.env.local`, then run:

```bash
npm install
npm run dev
```

Provider API secrets remain in Supabase Edge Function secrets and are never exposed to the browser.
